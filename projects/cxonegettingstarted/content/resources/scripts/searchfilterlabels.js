(function (w) {
		var _self = {
			init: function () {
				console.log('Calling ready...');
				_self.ready();
			},
			ready: function () {
				$(document).ready(function(){

						/* Add filter labels */
						if ($('html').hasClass('search-results') && (window.location.href.indexOf("&f=") > -1)) {
							_self.methods.getFilterFromURL();
						} else {
							_self.methods.addFilterLabels();
						}
						/* Events */
						$('.search-filter-content').click(function() {
								_self.methods.updateFilterLabels();
							});
					});
			},
			methods: {
			addFilterLabels: function () {
				var filterText= $('.search-filter').attr('title');
				filterLabel = '<span id="filterText">' + filterText + '</span>';
				if ($('html').hasClass('home-topic')) {
					homeFilterLabel = '<span id="filterText">' + filterText + '</span>';
					$(homeFilterLabel).prependTo('.HomeBody .search-filter');
					var filterWidth= $('.HomeBody .search-filter-wrapper').width() + 10;
					$('.HomeBody input.search-field').css('padding-left', filterWidth);
					$('.HomeBody input.search-field').attr('placeholder', 'Search');
				}
				$(filterLabel).prependTo('.nav-search-wrapper .search-filter');
				var filterWidth= $('.nav-search-wrapper .search-filter-wrapper').width() + 10;
				$('.nav-search-wrapper input.search-field').css('padding-left', filterWidth);
				$('.nav-search-wrapper input.search-field').attr('placeholder', 'Search');
			},
			getFilterFromURL: function () {
				var filterText = window.location.href.split('&f=').pop();
				filterText = filterText.replace(/%20/g, ' ');
				filterLabel = '<span id="filterText">' + filterText + '</span>';
				$(filterLabel).prependTo('.search-filter');
				var filterWidth= $('.nav-search-wrapper .search-filter-wrapper').width() + 10;
				$('.nav-search-wrapper input.search-field').css('padding-left', filterWidth);
				$('input.search-field').attr('placeholder', 'Search');
			},
			updateFilterLabels: function () {
				var filterText= $('.search-filter').attr('title');
				if ($('html').hasClass('home-topic')) {
					var homeFilterText= $('.search-filter').attr('title');
					$('.HomeBody #filterText').text(homeFilterText);
					var filterWidth= $('.HomeBody .search-filter-wrapper').width() + 10;

					$('.HomeBody input.search-field').css('padding-left', filterWidth);
					$('.HomeBody input.search-field').attr('placeholder', 'Search');
				}
				$('.nav-search-wrapper #filterText').text(filterText);
				var filterWidth= $('.nav-search-wrapper .search-filter-wrapper').width() + 10;
				$('.nav-search-wrapper input.search-field').css('padding-left', filterWidth);
				$('.nav-search-wrapper input.search-field').attr('placeholder', 'Search');
			}
			}
			};
		window.TopNav = _self;
		_self.init();
	})(window || {}); 