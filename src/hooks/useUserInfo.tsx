import { useState } from 'react';
import CONSTANTS from 'src/config';

const { LH_TOKEN_NAME } = CONSTANTS;

export interface UserInforData {
  nome: string;
}

function useUserInfo(): UserInforData {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, _] = useState<UserInforData>(() => {
    const token = localStorage.getItem(LH_TOKEN_NAME);

    if (token) {
      try {
        // const { data } = jwt.decode(token) as { data: UserInforData };
        return {
          nome: 'Fulano de Tal'
        };
      } catch (error) {
        // handleUnauthorizedUser();
      }
    }

    return {} as UserInforData;
  });

  return user;
}

export default useUserInfo;