/** Given an Array of users, it returns an object with the modules per User */
const getUserByModule = (users: Definitions.User[]) => {
  const modules = {
    auth_module: {} as Record<string, string[]>,
    content_module: {} as Record<string, string[]>,
  };
  users.forEach(({ provider, pathName }) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { auth_module: currAuth_module, content_module: currContent_module } =
      modules;
    const authProvider = provider.auth_module;
    const curAuthProvider = currAuth_module[`${authProvider}`] || [];
    const newAuthProvider = [...curAuthProvider, pathName];
    modules.auth_module[`${authProvider}`] = newAuthProvider;
    const contentProvider = provider.content_module;
    const curContentProvider = currContent_module[`${contentProvider}`] || [];
    const newContentProvider = [...curContentProvider, pathName];
    modules.content_module[`${contentProvider}`] = newContentProvider;
  });
  return modules;
};

export default getUserByModule;
