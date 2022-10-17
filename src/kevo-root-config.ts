import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   // @ts-ignore
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@kevo/react-ts",
  // @ts-ignore
  app: () => System.import("@kevo/react-ts"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
