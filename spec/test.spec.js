
describe('Description 01', function(){
    
    /* 
    Runs before any test block.
    */
    beforeAll(function(){
        console.log('Running the beforeAll hook');
    });

    /*
    Runs before any given test block.
    */
    beforeEach(function(){
        console.log('Running the beforeEach hook')
    })

    /* 
    Runs after all the test blocks have run.
    */
    afterAll(function(){
        console.log('Running the afterAll hook');
    });

    /*
    Runs after any given test block.
    */
    afterEach(function(){
        console.log('Running the afterEach hook')
    })

    it('Test 01', function(){
        console.log('Testing test 01');
    });

    it('Test 02', function(){
        console.log('Testing test 02');
    });

    it('Test 03', function(){
        console.log('Testing test 03');
    });
})