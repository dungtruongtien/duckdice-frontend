// import useRouter from '../../util/useRouter';

export const usePermissions = (field, value, action) => {
  const test2 = (data) => {
    console.log('---------', data);
  };

  // const { history } = useRouter();
  const test = false;
  if (!test) {
    // history.push('/');
  }
  return [test, test2];
};

export const useAuthHook = (field, value, action) => {
};
