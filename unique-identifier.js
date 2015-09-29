/**
 * Unique Identifier 9/29/15
 * ----------------------
 * This plugin will simply provide a jQuery function that will return a random number
 * to your specified length for use in unique ids for Directives or Polymer Elements for example.
 *
 * Usage:
 * You can add a prefix for your returned value for specificity;
 * uniqueIdentifier(prefix);
 * uniqueIdentifier('id'), ex: id-2323
 * uniqueIdentifier(), ex: 2342
 *
 * **/


var uniqueIdentifier = function(prefix){
    if (!prefix) {
        prefix = '';
    } else {
        prefix = prefix + '-';
    }

    var cust_Id = prefix,
        randomValue = Math.floor((Math.random() * 90000) + 1);

    cust_Id = prefix + randomValue;
    return cust_Id;
};

alert(uniqueIdentifier('rocket'));
