const cluster = require("cluster");
const os = require("os");
const processCluster = require("process");
const availableParallelism = os.availableParallelism;
const numCPU = availableParallelism();
if (cluster.isPrimary) {
  console.log(`Primary ${processCluster.pid} is running`);
  for (i = 0; i < numCPU; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.id} died`);
    // cluster.fork();
  });
} else {
  require("./app");
}
/**
 * This is the Primary File hare staring all the Processes. in avalable all cpu
 */
