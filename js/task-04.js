class StringBuilder {
    constructor(...value) {
        this._value = value;
        //this._string = value.toString();
    }

    get value() {
        // const arr = Array.toString(this._value);
        return this._value.join('');
        
    }

    append(str) {
        
        return this._value.push(str);

    }

    prepend(str) {
        
        return this._value.splice(0, 0, str);
    }

     pad(str) {
         this._value.splice(0, 0, str);
         this._value.push(str);
         return this._value;
         
    }
}

const builder = new StringBuilder('.');


builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='