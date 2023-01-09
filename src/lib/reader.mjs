import fs from 'fs';

export class Reader {
  constructor(fname) {
    if (fname.indexOf('.json') == -1)
      this.fname = fname + '.json';
    else
      this.fname = fname;
  }

  getData() {
    return JSON.parse(fs.readFileSync(this.fname).toString());
  }

  saveData(content) {
    fs.writeFileSync(this.fname, JSON.stringify(content));
  }

  isEmptyObject(objectName) {
    for (var key in objectName) {
      return false;
    }
    return true;
  }

  getDataNamesList() {
    let list = [];
    for (let name in this.getData()) {
      list.push(name);
    }
    return list;
  }

  getDataFormattedList() {
    let list = [];
    let arr = this.getData();
    for (let name in arr) {
      let str = name + '\n';
      for (let property in arr[name]) {
        str += '    ' + property + ': ' + arr[name][property].toString() + '\n';
      }
      list.push(str);
    }
    return list;
  }

  getDataFormattedString() {
    return this.getDataFormattedList().join('\n');
  }

  getDataFormattedListByException(ex) {
    let list = [];
    let arr = this.getData();
    for (let name in arr) {
      if (arr[name].status != ex) {
        let str = this.getRandSmile() + ' ' + name + '\n';
        for (let property in arr[name]) {
          str += '    ' + property + ': ' + arr[name][property].toString() + '\n';
        }
        list.push(str);
      }
    }
    return list;
  }

  getDataFormattedStringByException(ex) {
    return this.getDataFormattedListByException(ex).join('\n');
  }

  deleteData(name) {
    let arr = this.getData();
    delete arr[name];
    this.saveData(arr);
  }

  addData(name, content = null) {
    let arr = this.getData();
    arr[name] = content;
    this.saveData(arr);
  }

  changeDataProperty(name, property, value) {
    let arr = this.getData();
    arr[name][property] = value;
    this.saveData(arr);
  }

  changeData(name, value) {
    let arr = this.getData();
    arr[name] = value;
    this.saveData(arr);
  }

  searchWhere(prop, value) {
    let arr = this.getData();
    let result = [];
    for (let item in arr) {
      if (arr[item][prop] == value)
        result.push(arr[item]);
    }
    return result;
  }

  searchWhereCustom(prop, value, arr) {
    //let arr = this.getData();
    let result = {};
    for (let item in arr) {
      if (arr[item][prop] == value)
        result[item] = arr[item];
    }
    return result;
  }
}