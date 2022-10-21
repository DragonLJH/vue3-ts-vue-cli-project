import MyAxios from "@/axios/index";

const myAxios = new MyAxios({});

export function queryAllMsg(url: string): Promise<Object> {
  return myAxios.get(url, {})
}
export function insertData(url: string, data: object, config: any = {}): Promise<Object> {
  return myAxios.post(url, data, config)
}
export function deleteData(url: string, data: object, config: any = {}): Promise<Object> {
  return myAxios.post(url, data, config)
}

