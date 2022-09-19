import MyAxios from "@/axios/index";

const myAxios = new MyAxios({});

export function queryAllMsg(url: string): Promise<Object> {
  return myAxios.get(url, {})
}
export function insertData(url: string, data: object): Promise<Object> {
  return myAxios.post(url, data)
}
export function deleteData(url: string, data: object): Promise<Object> {
  return myAxios.post(url, data)
}

