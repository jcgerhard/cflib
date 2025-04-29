export function get(username) {
    const user = api.users.get_by_user_name(username);
    return {
        fullname: user.fullname,
        firstname: user.fullname,
        lastname: user.fullname,
        email: user.email,
        attributes: user.attributes_names,
    };
}
