import { Agent, AgentOptions } from 'agent-base';

declare module ProxyAgent {
	interface ProxyAgent extends Agent {
    }
}

declare const proxy: ProxyAgentConstructor;

interface ProxyAgentConstructor {
    (options?: AgentOptions | string, protocol?:string): ProxyAgent.ProxyAgent;
    new (options?: AgentOptions | string, protocol?:string): ProxyAgent.ProxyAgent;
}

export = proxy;
