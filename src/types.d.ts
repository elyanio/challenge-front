declare namespace Definitions {
  export type User = {
    name: string;
    provider: Provider;
    pathName: string;
  };
  export type Provider = {
    content_module: string;
    auth_module: string;
  };
}
