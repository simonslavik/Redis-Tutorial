// bites:restaurant:<id>

export function getKeyName(...args: string[]){
    return `bites:restaurant:${args.join(':')}`;
}