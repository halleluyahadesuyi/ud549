describe('Address Book', function() {
    var addressBook = new AddressBook(),
        thisContact = new Contact();

    beforeEach(function() {
        addressBook = new AddressBook()
        thisContact = new Contact()
    })

    it('should be able to add a contact', function() {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    })

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined()
    })
})

// 'done' is a new special function that signals to the
// framework when an asynchronous function has completed and
// we are ready to go run our test 
describe('Async Address Book', function() {
    var addressBook = new AddressBook()

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            // call the done function, which signals to the framework
            // that the async function has completed what we needed it
            // to do, and we can continue testing
            done()
        })
    })

    it('should grab initial contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true)
        // 'done' is used in this particular spec to signal to the framework 
        // which of our tests relies upon the async execution
        done()
    })
})
