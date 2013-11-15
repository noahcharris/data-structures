describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should have a head", function(){
    binarySearchTree.insert(10);
    expect(binarySearchTree.head).toEqual(jasmine.any(Object));
  });

  it("insert should return a node", function(){
    expect(binarySearchTree.insert("yolo")).toEqual(jasmine.any(Object));
  });

  it("should be able to add nodes", function(){
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(17);
    expect(binarySearchTree.contains(17)).toBe(true);
  });
  // add more tests here to test the functionality of binarySearchTree
});
