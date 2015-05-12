;(function($, window, document, undefined){

    function BugObj(options) {
        this.doodleName = options.name || 'unnamed';
        this.teamName = options.team || 'foo';
        this.attributes = {
            speed: options.attributes.speed,
            strength: options.attributes.strength,
            intelligence: options.attributes.intelligence
        };
        this.getHighestRating = function() {
            var highestRating =  Math.max(this.attributes.speed, Math.max(this.attributes.strength, this.attributes.intelligence));
            return highestRating;
        };
        this.getName = function() {
            return this.doodleName;
        };
        this.formatName = function() {
            return this.doodleName + ":bug";
        };

    }

    var bugArr = [];

    $(document).ready(function() {
        window.doodleBug = window.doodleBug || {};

        doodleBug.Bug = BugObj;

        var $doodleTable = $("#doodle-list");
        var request = $.ajax({
            url: "services/doodles.json",
            method: "GET"
        });

        request.done(handleDoodles);
        request.fail(handleFailedRequest);

        bindEvents();

    });

    function bindEvents(){

        $('a', '.sortable').on('click', function(evt){

            evt.preventDefault();

            if($(this).hasClass('sort-up')){
                $(this).removeClass('sort-up');
                $(this).addClass('sort-down');
                sortBugsByName('down');
            } else {
                if($(this).hasClass('sort-up')){
                    $(this).removeClass('sort-down');
                }
                $(this).addClass('sort-up');
                sortBugsByName('up');
            }
        });
    }

    function handleDoodles(data) {

        var serverResponse = data;

        $.each(serverResponse, function(i, theBug){
            var b = new doodleBug.Bug({name: theBug.name, team: theBug.team, attributes: theBug.attributes});
            bugArr.push(b);
        });

        renderBugs(bugArr);
        renderComparison();

    }

    function renderBugs(bugList) {

        $.each(bugList, function(i, bug){
            $('#doodle-list tbody').append('<tr><td class="icon-'+bug.doodleName+'-bug">'+bug.formatName()+'</td><td>'+bug.teamName+'</td><td>'+bug.getHighestRating()+'</td><td><input name="compare[]" type="checkbox" value="'+bug.doodleName+'"/></td></tr>')
        });

        $("input:checkbox").on('click',function() {
            var compareLimit = $("input:checkbox:checked").length >= 2;
            $("input:checkbox").not(":checked").attr("disabled",compareLimit);

            renderComparison();
        });

    }

    function renderComparison() {

        // get the list of the selected checkboxes
        var selected = [];

        $('#doodle-list input:checked').each(function() {
            selected.push($(this).attr('value'));
        });

        $('#comparison-list tbody').empty();

        if(!selected.length) {
            renderDefaultComparisonText()
        }

        var firstItem = selected[0] ? '<td class="icon-'+selected[0]+'-bug large-icon"></td>' : '<td class=""><i class="fa fa-question-circle fa-4x"></i></td>';
        var secondItem = selected[1] ? '<td class="icon-'+selected[1]+'-bug"></td>' : '<td class=""><i class="fa fa-question-circle fa-4x"></i></td>';
        $('#comparison-list tbody').append('<tr>' + firstItem +  '<td> vs </td>' + secondItem + '</tr>');


        if(!selected.length) {
            return;
        }

        var firstBug = getBugByName(selected[0]);
        var secondBug = getBugByName(selected[1]);

        // speed
        var speedOne = firstBug ? firstBug.attributes.speed : '0';
        var speedTwo = secondBug ? secondBug.attributes.speed : '0';
        $('#comparison-list tbody').append('<tr>' + '<td>' + speedOne +  '</td><td> speed </td><td>' + speedTwo + '</td></tr>');

        // strength
        var strengthOne = firstBug ? firstBug.attributes.strength : '0';
        var strengthTwo = secondBug ? secondBug.attributes.strength : '0';
        $('#comparison-list tbody').append('<tr>' + '<td>' + strengthOne +  '</td><td> strength </td><td>' + strengthTwo + '</td></tr>');


        // intelligence
        var intelligenceOne = firstBug ? firstBug.attributes.intelligence : '0';
        var intelligenceTwo = secondBug ? secondBug.attributes.intelligence : '0';
        $('#comparison-list tbody').append('<tr>' + '<td>' + intelligenceOne +  '</td><td> intelligence </td><td>' + intelligenceTwo + '</td></tr>');
    }

    function renderDefaultComparisonText() {
        $('#comparison-list tbody').append('<tr><td>Select two doodles to compare which has the skills you like the most.</td></tr>');
    }

    // returns the requested bug from the `bugArr`
    function getBugByName(name) {
        var array = _.where(bugArr, {doodleName:name});
        return array ? array[0] : null;
    }

    function sortBugsByName(direction) {
        if (direction==="down") {
            bugArr = bugArr.sort(function (a, b) {
                return a.doodleName.localeCompare( b.doodleName );
            });
        }

        if (direction==="up") {
            bugArr = bugArr.sort(function (a, b) {
                return a.doodleName.localeCompare( b.doodleName );
            });
            bugArr.reverse();
        }

        renderBugs(bugArr);
    }

    function handleFailedRequest(jqXHR,textStatus){
        alert('failed');
    }

})(jQuery, window, document);
