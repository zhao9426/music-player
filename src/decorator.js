function log(target){
    const desc = Object.getOwnPropertyDescriptors(target.prototype);

    for(const key of Object.keys(desc)){
        if(key === 'constructor'){
            continue;
        }
        const func = desc[key].value;
        if('function' === typeof func){
            Object.defineProperty(target.prototype, key, {
                value(...args){
                    console.log('before ' + key);
                    const ret = func.apply(this, args);
                    console.log('after ' + key);
                    return ret;
                }
            });
        }
    }
}

function readonly(target, key, descriptor){
    descriptor.writable = false;
}

function validate(target, key, descriptor){
    const func = descriptor.value;
    descriptor.value = function(...args){
        for(let num of args){
            if('number' !== typeof num){
                throw new Error(`${num} is not a number`);
            }
        }
        return func.apply(this, args);
    }
}

function annotation(target){
    target.annotation = true;
}

function isTestable(value){
    return function decorator(target){
        target.isTestable = value;
    }
}

function enumerable(value){
    return function(target, key, descriptor){
        descriptor.enumerable = value;
        return descriptor;
    }
}

@log
@annotation
@isTestable(true)
class Numberic {
    @readonly
    @enumerable(true)
    PI = 3.1415926
    @validate
    @enumerable(false)
    add(...nums){
        return nums.reduce((n, m) => (n + m), 0);
    }
}

let a = new Numberic()
console.log(a.add(1, 2, 3, '2'));
a.PI = 3;
console.log(a.PI);

for(let k in a){
    console.log(k)
}