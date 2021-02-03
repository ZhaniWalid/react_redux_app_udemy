// This file is used for the 'reducers' as Optimizer for code to make it a bit 'leaner & cleaner'

// The 'oldObject' => which i want to 'copy & update'
// The 'updatedValues' => 'New values' to make the 'update'
export const updateObject = (oldObject, updatedValues) => {
    return {
        // Distribute the 'oldObject' with it's 'properties & values' inside of it
        ...oldObject,
        // Distribute the 'updatedValues' => A 'JavaScript Object' with all 'values i want to Override'
        ...updatedValues
    }
};