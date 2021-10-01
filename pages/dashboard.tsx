import { useContext, useEffect } from 'react';
import { Can } from '../components/Can';
import { AuthContext } from '../contexts/AuthContext';
import { useCan } from '../hooks/useCan';
import { setupAPIClient } from '../services/api';
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api.get('me');
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={signOut}>Sign Out</button>
      <Can permissions={['metrics.list']}>
        <div>metricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);
  //   const response = await apiClient.get('/me');
  return {
    props: {},
  };
});
