import React from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import GridLoader from 'react-spinners/GridLoader';

builder.init(process.env.REACT_APP_BUILDER_API_KEY);

export default function Page({ pathname }) {
  const [pageContent, setPageContent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    builder.get('page', { url: pathname }).promise()
      .then(setPageContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [pathname]);

  if (error) {
    return error.message;
  }

  if (loading) {
    return <GridLoader />;
  }

  return (
    <div className="App">
      <BuilderComponent content={pageContent} />
    </div>
  );
}
