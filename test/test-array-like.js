
var ArrayLike = require('array-like');

describe('Array-Like', function () {
    
    describe('Instantiation', function () {
        
        it('No arguments', function () {
            var list = new ArrayLike();
            list.length.should.equal(0);
        });
        
        it('With arguments', function () {
            var list = new ArrayLike(1, 2, 3);
            list.length.should.equal(3);
            list.get(0).should.equal(1);
            list.get(1).should.equal(2);
            list.get(2).should.equal(3);
        });
        
    });
    
    describe('#push()', function () {
        var list;
        
        beforeEach(function () {
            list = new ArrayLike();
        });
        
        it('should return the correct length', function () {
            list.push('foo').should.equal(1);
        });
        
        it('should append to the correct index', function () {
            var idx = list.push('foo') - 1;
            list[idx].should.equal('foo');
        });
    });
    
    describe('Iterators', function () {
        var list;
        
        before(function () {
            list = new ArrayLike(1, 2, 3, 4, 5);
        });
        
        describe('#forEach', function () {
            
            it('should iterate in order', function () {
                list.forEach(function (item, idx) {
                    item.should.equal(idx + 1);
                });
            });
        });
    });
    
    describe('ArrayLike maker methods', function () {
        var list;
        
        beforeEach(function () {
            list = new ArrayLike(1, 2, 3, 4, 5);
        });
        
        describe('#slice()', function () {
            
            it('should return an ArrayLike instance', function () {
                var slice = list.slice(2, 5);
                (slice instanceof ArrayLike).should.equal(true);
            });
            
            it('should return the correct slice', function () {
                var slice = list.slice(2, 5);
                slice.length.should.equal(3);
                slice.get(0).should.equal(3);
                slice.get(1).should.equal(4);
                slice.get(2).should.equal(5);
            });
        });
        
        describe('#concat()', function () {
            
            it('should return an ArrayLike instance', function () {
                var newlist = list.concat([6, 7, 8, 9, 10]);
                (newlist instanceof ArrayLike).should.equal(true);
            });
            
            it('should have the correct values', function () {
                var newlist = list.concat([6, 7, 8]);
                newlist.length.should.equal(8);
                newlist.get(5).should.equal(6);
                newlist.get(6).should.equal(7);
                newlist.get(7).should.equal(8);
            });
        });
    });
    
    describe('#toString()', function () {
        it('should make strings like a regular array', function () {
            (new ArrayLike(1, 2, 3, 4)).toString().should.equal('1,2,3,4');
        });
    });

    describe('#valueOf()', function () {
        it('should look like a regular array', function () {
            (new ArrayLike(1, 2, 3, 4)).valueOf().should.eql([1, 2, 3, 4]);
        });
    });
    
});