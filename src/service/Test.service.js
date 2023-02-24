import User from '../data/user.json';
import { pagination } from '../helper/Response';

export function getDataTest(pagesize = 10, currentpage = 1, search = '') {
  let user = User;

  if (search) {
    user = user.filter((a) => a.name.includes(search));
  }

  return pagination(pagesize, currentpage, user);
}
