import { ReactNode } from "react";

/** some experimental build providers tree that can be configured in following way:

const ProvidersTree = buildProvidersTree([
  [DndProvider, { backend: HTML5Backend }],
  [QueryClientProvider, { client: queryClient }],
  [RouterProvider, { router: router }],
]);

NOTE: throws warning about render / createRoot conflict
*/

export const buildProvidersTree = (componentsWithProps: [React.ComponentType<any>, object][]) => {
  const initialComponent = ({ children }: { children?: ReactNode }) => <>{children}</>;
  console.log("bcc");
  return componentsWithProps.reduce((AccumulatedComponents, [Provider, props = {}]) => {
    return ({ children }: { children?: ReactNode }) => {
      return (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      );
    };
  }, initialComponent);
};
