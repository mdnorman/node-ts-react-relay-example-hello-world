# React Relay TODO Example

## Setup

### Node

1.  Install `nvm` ([Node Version Manager](https://github.com/creationix/nvm))
2.  `cd` to the project directory and execute the following:
    ```
    nvm install
    nvm use
    npm install
    ```

### IDE Setup

This project uses [EditorConfig](https://editorconfig.org/) for IDE configuration.

See `.editorconfig` for settings.

Many popular IDEs and editors support this out of the box or with a plugin.

### GraphQL Server

This project assumes that there is a separate GraphQL server running for the backend.

This example is using the [Relay Examples] project.

The server configuration assumes that the GraphQL server is running on
[http://localhost:3000/graphql](http://localhost:3000/graphql).

The GraphQL server port can be changed by setting the environment variable `GRAPHQL_PORT` to an open port.

The GraphQL server URL can be wholly changed by setting the environment variable `GRAPHQL_URL` to a valid URL.

In addition, the `fetch-schema` command will use these environment variables if set

### AWS

1.  Install AWS CLI for your computer
2.  Setup AWS CLI with your credentials
3.  Add a configuration for `serverless` in your AWS config files

### Serverless

This project uses [Serverless] to deploy. Install `serverless` as a global:

```
npm install -g serverless
```

Change the bucket to be used for logs in the `custom.logs.bucket` property in `serverless.yml`.

### Domain Name

1.  Register a domain name in AWS Route53
2.  Change the `custom.hostedZone` property in `serverless.yml` to the zone name, eg `whatever.com`

## Development

### Updating `schema.graphql`

```
npm run fetch-schema
```

### Compiling Relay

One time:

```
npm run relay
```

Watch files and continually compile changes:

```
npm run relay:watch
```

### Running the Local Server

```
npm run server:development
```

The server runs at [http://localhost:5000/](http://localhost:5000/).

The port can be changed by setting the environment variable `WEBPACK_SERVER_PORT` to an open port.

### Prettier

This project uses [Prettier](https://prettier.io/), so please run it before checking in:

```
npm run pretty
```

See `.prettierrc` for settings.

Some IDEs and editors have plugins for running Prettier.

### Linting

This project uses [TSLint](https://palantir.github.io/tslint/). Check linting before checking in:

```
npm run lint
```

See `tslint.json` for settings.

Many IDEs and editors support TSLint.

## Testing

This project uses [Jest](https://jestjs.io/) for testing. Run tests before checking in.

### Unit Tests

```
npm test
```

### Integration Tests

```
npm run test:integration
```

## Building

### Development

```
npm run build:development
```

### Production

```
npm run build
```

## Deploy

> NOTE: AWS Certificate validation requires a manual step during the first deployment.
>
> When the following is displayed, go to the AWS Certificate Manager console for the new domain name and create the record in Route 53:
>
> `CloudFormation - CREATE_IN_PROGRESS - AWS::CertificateManager::Certificate - WebAppCertificate`

### Test

```
npm run deploy:test
```

### Production

```
npm run deploy
```

### Troubleshooting

If there are errors when deploying, check the Cloudformation logs for the stack.
