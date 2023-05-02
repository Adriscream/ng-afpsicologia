import { SetMetadata, applyDecorators } from '@nestjs/common';

export const Public = () => applyDecorators(SetMetadata('isPublic', true));
