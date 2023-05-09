/* eslint-disable @typescript-eslint/ban-types */
// TODO refactor
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { UrlOptions } from 'imagekit-javascript/dist/src/interfaces';
import { Transformation } from 'imagekit-javascript/dist/src/interfaces/Transformation';

import { Dict, LqipOptions, QueryParameters } from './af-image-types';
import { ImagekitService } from './image-cdn.service';

@Component({
  selector: 'af-image',
  template: `<img src="" (load)="onImageLoaded($event)" />`,
})
export class IkImageComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() src?: string;
  @Input() path?: string;
  @Input() urlEndpoint?: string;
  @Input() transformation: Array<Transformation> = [];
  @Input() transformationPosition?: 'path' | 'query';
  @Input() queryParameters?: QueryParameters;
  @Input() lqip?: LqipOptions;
  @Input() loading?: string;
  url!: string;
  lqipUrl?: string;

  observer?: MutationObserver;

  get options() {
    return {
      src: this.src || undefined,
      path: !this.src ? this.path : undefined,
      urlEndpoint: this.urlEndpoint
        ? this.urlEndpoint
        : this.imagekit.ikInstance.options.urlEndpoint,
      transformation: this.transformation,
      transformationPosition: this.transformationPosition as any,
      queryParameters: this.queryParameters,
    } as UrlOptions;
  }
  constructor(private el: ElementRef, private imagekit: ImagekitService) {}

  ngOnInit(): void {
    this.setUrl();
  }

  ngOnChanges(): void {
    this.setUrl();
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    if (this.loading == 'lazy') {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      if (this.lqipUrl) {
        // If given LQIP, use that first
        this.loadImage(this, this.lqipUrl);
      }
      const imageObserver = new IntersectionObserver(
        (entry: any, observer: IntersectionObserver) => {
          // Always load the original image when intersecting
          that.handleIntersectionObserver(
            entry,
            observer,
            that.loadImage,
            that,
            that.url
          );
        }
      );
      imageObserver.observe(this.el.nativeElement);
    } else {
      // If given LQIP, use that first
      this.loadImage(this, this.lqipUrl ? this.lqipUrl : this.url);
    }
  }

  onImageLoaded = (event: any) => {
    if (this.loading != 'lazy' && event.srcElement.src === this.lqipUrl) {
      this.loadImage(this, this.url);
    }
  };

  handleIntersectionObserver(
    entry: any,
    observer: IntersectionObserver,
    loadImageFunc: Function,
    context: IkImageComponent,
    url: string
  ): void {
    if (entry[0] && entry[0].isIntersecting) {
      const image = entry[0].target;
      loadImageFunc(context, url);
      observer.unobserve(image);
    }
  }

  setUrl(): void {
    const config = this.getUrlOptions();
    this.url = this.imagekit.ikInstance.url(config);
    if (this.lqip?.active) {
      this.lqipUrl = this.constructLqipUrl();
    }
  }

  constructLqipUrl() {
    if (this.lqip?.active) {
      const quality = Math.round(
        this.lqip.quality || this.lqip.threshold || 20
      );
      const blur = Math.round(this.lqip.blur || 6);
      const newTransformation = this.options.transformation
        ? [...this.options.transformation]
        : [];
      if (
        this.lqip.raw &&
        typeof this.lqip.raw === 'string' &&
        this.lqip.raw.trim() != ''
      ) {
        newTransformation.push({
          raw: this.lqip.raw.trim(),
        });
      } else {
        newTransformation.push({
          quality: String(quality),
          blur: String(blur),
        });
      }
      return this.imagekit.ikInstance.url({
        ...this.options,
        transformation: newTransformation,
      });
    }
    return '';
  }

  getUrlOptions(): UrlOptions {
    const config: Partial<UrlOptions> = {
      transformation: this.options.transformation,
    };

    if (this.options.urlEndpoint) {
      config.urlEndpoint = this.options.urlEndpoint;
    } else {
      throw new Error('Missing urlEndpoint initialization!');
    }

    if (this.options.queryParameters) {
      config.queryParameters = this.options.queryParameters;
    }
    if (this.options.src) {
      config.src = this.options.src;
      config.transformationPosition = 'query';
    } else if (this.options.path) {
      config.path = this.options.path;
      if (this.options.transformationPosition) {
        config.transformationPosition = this.options.transformationPosition;
      }
    } else {
      throw new Error('Missing src / path during initialization!');
    }
    return config as UrlOptions;
  }

  loadImage(context: IkImageComponent, url: string): void {
    const nativeElement = context.el.nativeElement;
    const attributes = nativeElement.attributes;
    const attrsToSet = context.namedNodeMapToObject(attributes);
    attrsToSet['src'] = url;
    const image = nativeElement.children[0];
    context.setElementAttributes(image, attrsToSet);
  }

  namedNodeMapToObject(source: NamedNodeMap): Dict {
    const target: Dict = {};
    Object.keys(source).forEach((index) => {
      const name = source[index as any].name;
      const value = source[index as any].value;
      target[name] = value;
    });
    return target;
  }

  setElementAttributes(element: any, attributesLiteral: Dict): void {
    Object.keys(attributesLiteral)
      .filter((attrName) => attrName !== 'loading')
      .forEach((attrName) => {
        element.setAttribute(attrName, attributesLiteral[attrName]);
      });
  }
}
