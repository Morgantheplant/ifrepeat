FamousFramework.scene('morgan:arraytest', {
    behaviors: {
        '#add': {
            'size': [50, 50],
            'position':[10,10],
            'style': {
                'background-color': 'grey'
            },
            'content':'add'
        },
        '#minus': {
            'size':[50,50],
            'position': [65,10],
            'style':{
                'background':'blue'
            },
            'content': 'delete'

        },
        '#children':{
            'size':[50,50],
            'position': function($index){
                var spaced = $index*60
                return [spaced, 100]
            },
            $repeat: function(colors){
               return colors
            },
            'content': function($index, colors){
                return colors[$index]
            },
            'style':function ($index, colors){
               return {
                'background': colors[$index],
                'border': '2px solid black'
               }
            },
            // $if: function(colors, $index){
            //     console.log($index)
            //    return !!colors[$index]
            // }
        }

    },
    states: {
        colors: ['red', 'blue', 'green']
    },
    events: {
        '#add':{
            'click': function($state){
                var colors = ['red', 'blue', 'green']
                var randomColor = colors[Math.floor(colors.length*Math.random())]
                $state.set('colors', $state.get('colors').concat([randomColor]))
            }

        },
        '#minus':{
            'click': function($state, $dispatcher){
               var colors = $state.get('colors')
               colors.pop()
               $state.set('colors', colors)
               console.log($state.get('colors'))
            }
        }
    },

    tree: `<node id="add">
           </node>
           <node id="minus">
           </node>
           <node id="children"></node>
           `
});


