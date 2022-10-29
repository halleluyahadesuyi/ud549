function AddressBook() {
    this.contacts = []
    this.initialComplete = false
}

// start of boiler plate code 
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this

    setTimeout(function() {
        self.initialComplete = true
        if (cb) {
            return cb()
        }
    }, 3)
}
// end of boiler plate code 

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact)
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index]
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1)
}