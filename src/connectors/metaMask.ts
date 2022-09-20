import { MetaMask } from '@web3-react/metamask';
import { initializeConnector } from 'web3-vuejs';

let connectorCached: ReturnType<typeof initializeConnector>;

export const useConnector = () => {
  connectorCached ||= initializeConnector<MetaMask>((actions) => new MetaMask({ actions }));
  return connectorCached;
}