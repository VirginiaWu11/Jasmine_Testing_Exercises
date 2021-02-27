describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should add a new row with the server name and earnings to the server table on updateServerTable()', function() {
		submitServerInfo();
		expect(serverTbody.rows.length).toEqual(1);
		expect(serverTbody.rows[0].cells[0].innerText).toEqual('Alice');
	});

	afterEach(function() {
		allServers = [];
		serverId = 0;
		serverNameInput.value = '';
		let serverChildren = document.querySelector('#server1');
		serverChildren.remove();
		// teardown logic
	});
});
