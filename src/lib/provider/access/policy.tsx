import { StringAdapter } from "casbin";

export const adapter = new StringAdapter(`
p, admin, user, (list)|(create)
p, admin, user/*, (edit)|(show)|(delete)
p, admin, log-out, (create)
p, admin, profile/*, (edit)|(show)|(delete)
p, admin, profile, (list)|(create)


`);
