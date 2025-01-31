import { Agent, AgentOptions } from 'agent-base';

declare module ProxyAgent {
	interface ProxyAgent extends Agent {
    }
}

declare const proxy: ProxyAgentConstructor;

interface ProxyAgentConstructor {
    (options?: AgentOptions | string, agentProtocol?:string): ProxyAgent.ProxyAgent;
    new (options?: AgentOptions | string, agentProtocol?:string): ProxyAgent.ProxyAgent;
}

export = proxy;
