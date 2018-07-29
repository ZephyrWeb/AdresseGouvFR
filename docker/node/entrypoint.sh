#!/bin/sh
CMD=$*
echo $CMD
echo $ENV

npm install -g ts-node typescript parcel-bundler
apk add --update --no-cache git

if [[ "$ENV" = "prod" ]]
then
    echo Installation production
    yarn run production
else
    echo Installation Dev
    npm install -g mocha chai ts-node typescript @storybook/cli tslint
    echo Fin Installation Dev
    $CMD
fi
