/**
 * i have to create a .desktop file
 * then point the scheme to the .desktop with mimeo
 * then i need to do all that and in the browser open with the scheme
 * and add that to the startup script
 * like:
 *
 * nix://file/55
 */
// import { WebSocketServer } from "./lib/deps.ts";

// const server = new WebSocketServer(3333);

// server.on("error", () => {
//   console.log("did not work");
// });

// server.on("connection", (websocket) => {
//   websocket.on("open", () => console.log("open"));
//   websocket.on("close", () => console.log("close"));
//   websocket.on("error", () => console.log("error"));

//   websocket.on("message", (data) => {
//     console.log(`receiving messsage ${data}`);
//   });
// });

// const files: Deno.DirEntry[] = [];

// const basePath = "/home/vitor";

// for await (const file of Deno.readDir(basePath)) {
//   files.push(file);
// }

// const NonDotFiles = files.filter((file) => !file.name.includes("."));

// const fullTree = await Promise.all(
//   NonDotFiles.map(async (file) => {
//     if (file.isDirectory) {
//       const fileRecurse = Deno.readDir(`${basePath}/${file.name}`);
//       const fileCache: Deno.DirEntry[] = [];

//       for await (const file of fileRecurse) {
//         fileCache.push(file);
//       }

//       return fileCache;
//     }

//     return file;
//   })
// );

// console.log(fullTree);
