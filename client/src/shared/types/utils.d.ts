export type FormSubmitEvent = SubmitEvent & { currentTarget: HTMLFormElement };

export type Children = ReactChildren;

declare module "@react-types/shared" {
    interface RouterConfig {
      routerOptions: NavigateOptions;
    }
  }