export function renderTemlate(templatedSrting, data) {
    const pattern = /{{(.+)}}/gm
    return templatedSrting.replace(pattern, (match, propName) => data[propName])
}