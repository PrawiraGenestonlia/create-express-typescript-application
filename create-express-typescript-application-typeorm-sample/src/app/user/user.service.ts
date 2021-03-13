import { Role } from '@entity/role';
import { User } from '@entity/user';

export const getAllUser = async () => {
  try {
    return await User.find({ relations: ['roles'] });
  } catch (e) {
    console.error(e);
  }
}

export const createUser = async ({ email, roles }: { email: string, roles: string[] }) => {
  try {
    const _newUser = new User();
    _newUser['email'] = email;
    // _newUser.roles = newRoles;
    await _newUser.save();

    await Promise.all(roles.map(async (_role) => {
      try {
        const _new = new Role();
        _new['role'] = _role;
        _new.user = _newUser;
        return _new.save();
      } catch (e) {
        console.error(e);
      }
    }));

    return await User.findOne({
      where: { email: email },
      relations: ['roles']
    });

  } catch (e) {
    console.error(e);
  }
}

export const updateUser = async ({ id, email, roles }: { id: number, email: string, roles: string[] }) => {
  try {
    const _updatedUser = await User.findOne({ where: { id }, relations: ['roles'] });
    if (!_updatedUser) return { message: "User is not found!" };
    _updatedUser['email'] = email;
    await Promise.all(_updatedUser['roles']?.map(async (_role) => {
      try {
        return _role.remove();
      } catch (e) {
        console.error(e);
      }
    }));
    await _updatedUser.save();

    await Promise.all(roles.map(async (_role) => {
      try {
        const _new = new Role();
        _new['role'] = _role;
        _new.user = _updatedUser;
        return _new.save();
      } catch (e) {
        console.error(e);
      }
    }));

    return await User.findOne({
      where: { email: email },
      relations: ['roles']
    });

  } catch (e) {
    console.error(e);
  }
}

export const deleteUser = async ({ id }: { id: number }) => {
  try {
    const foundUser = await User.findOne({ id: id });
    return await foundUser?.remove();
  } catch (e) {
    console.error(e);
  }
}