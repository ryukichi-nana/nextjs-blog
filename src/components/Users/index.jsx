import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const UsersComponent = () => {
    const { data, error, isLoading, isEmpty } = useUsers();
    
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error.massage}</p>;
    }
  
    if (isEmpty) {
      return <p>No users found.</p>;
    }
  
    return (
      <ul className="grid grid-cols-2 gap-6">
        {data.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`} legacyBehavior>
                <a className="block p-4 shadow rounded hover:bg-gray-100">
                  <h1 className="text-xl font-bold truncate">{user.name}</h1>
                  <div className="text-lg truncate">{user.email}</div>
                  </a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };