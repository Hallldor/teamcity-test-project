import functions from './functions'

test('expect same with no null array', () => {
    expect(functions.noNullArray([1, 2, 3])).toStrictEqual([1, 2, 3])    
})

test('null value removed from array', () => {
    expect(functions.noNullArray([1, null, 2, 3])).toStrictEqual([1, 2, 3])   
})

test('empty array unchanged', () => {
    expect(functions.noNullArray([])).toStrictEqual([])  
})