export interface UserInforData {
  nome: string;
  cargo: string;
  avatarUrl: string;
}

// TODO: busca das informações do usuário e retornar no hook
function useUserInfo(): UserInforData {
  return {
    nome: 'Fulano de Tal',
    cargo: 'Desenvolverdor',
    avatarUrl: '/static/images/avatars/avatar.png',
  };
}

export default useUserInfo;
