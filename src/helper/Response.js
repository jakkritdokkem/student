// การตอบสนองข้อมูลโดยทำการแบ่งหน้าเป็นส่วน {(pagin.currentpage - 1) * pagin.pagesize + (index + 1)}
export function pagination(pagesize, currentpage, data) {
  let value = data.slice(pagesize * (currentpage - 1), pagesize * currentpage).slice(0, pagesize);

  return {
    statusCode: 200,
    taskStatus: true,
    message: 'Success',
    pagin: {
      totalrow: data.length,
      pagesize: pagesize,
      currentpage: currentpage,
      totalpage: Math.ceil(data.length / pagesize),
    },
    data: value,
  };
}
