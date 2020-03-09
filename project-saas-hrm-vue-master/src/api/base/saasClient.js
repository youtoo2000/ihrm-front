import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI('/company', 'get', data)
export const detail = data => createAPI(`/company/${data.id}`, 'get', data)
//此处一定要用`，而不能用'，否则传到远程api的ID成了字符“${data.id}”，而不是实际ID值。`/company/${data.id}`
//export const detail = data => createAPI('/base/menus/${data.id}', 'get', data)
