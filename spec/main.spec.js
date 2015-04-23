describe("Player", function() {
  var bug;

  beforeEach(function() {
    bug = new window.doodleBug.Bug({
        name: "test bug name",
        team: "test team name",
        attributes: {
            speed: 45,
            strength: 35,
            intelligence: 67
        }
    });
  });

  it("should have a name", function() {
      expect(bug.doodleName).toBe('test bug name');
  });

  it("should format the name correctly", function() {
        var formattedName = bug.formatName();
        expect(formattedName).toBe('test bug name&colon;bug');
  });

  it("should work out the value of the best attribute", function() {
    var highestRating = bug.getHighestRating();
    expect(highestRating).toBe("67");
  });
});
