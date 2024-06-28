// export const dashboardRoute = {
//   path: "dashboard",
//   async lazy() {
//     let { default } = await import("@/theme/layout/Navbar");
//     return { Component: default };
//   },
// children: [
// {
//   index: true,
//   async lazy() {
//     let { Index } = await import("./pages/Dashboard");
//     return { Component: Index };
//   },
// },
// {
//   path: "messages",
//   async lazy() {
//     let { messagesLoader, Messages } = await import("./pages/Dashboard");
//     return {
//       loader: messagesLoader,
//       Component: Messages,
//     };
//   },
// },
//   ],
// };
