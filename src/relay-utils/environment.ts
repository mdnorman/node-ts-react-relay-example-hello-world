import { Environment, FetchFunction, Network, RecordSource, RequestParameters, Store, Variables } from 'relay-runtime';

const fetchQuery: FetchFunction = async (operation: RequestParameters, variables: Variables) => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query: operation.text,
    }),
  });
  return response.json();
};

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
