/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';

const useLoadUser = () => {
  const [users, setUsers] = useState<Definitions.User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const loadUsers = async () => {
      let newUsers: Definitions.User[] = [];
      setLoading(true);
      try {
        for (const index of Array(20).keys() as unknown as Array<string>) {
          const user = await import(`../data/u${index}.json`);
          newUsers = [
            ...newUsers,
            {
              ...user,
              pathName: `/u${index}.json`,
            },
          ];
        }
      } catch (err) {
        setError(err as Error);
      }
      setUsers(newUsers);
      setLoading(false);
    };
    loadUsers();
  }, []);

  return { users, loading, error };
};

export default useLoadUser;
