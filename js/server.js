import firstRoutes from "../routes/firstRoute.js";

import Fastify from "fastify";
const fastify = Fastify({
    logger: true,
});

fastify.register(firstRoutes);

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
