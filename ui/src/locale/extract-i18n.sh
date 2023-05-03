#!/bin/bash

# Check if the messages.es.xlf file exists and merge new tags if it does, or copy the file if it doesn't
if [ -f src/locale/messages.es.xlf ]; then
  xmllint --format src/locale/messages.es.xlf > tmp.xml && mv tmp.xml src/locale/messages.es.xlf
else
  cp src/locale/messages.xlf src/locale/messages.es.xlf
fi
