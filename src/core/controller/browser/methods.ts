// AUTO-GENERATED FILE - DO NOT MODIFY DIRECTLY
// Generated by proto/build-proto.js

// Import all method implementations
import { registerMethod } from "./index"
import { discoverBrowser } from "./discoverBrowser"
import { getBrowserConnectionInfo } from "./getBrowserConnectionInfo"
import { testBrowserConnection } from "./testBrowserConnection"

// Register all browser service methods
export function registerAllMethods(): void {
	// Register each method with the registry
	registerMethod("discoverBrowser", discoverBrowser)
	registerMethod("getBrowserConnectionInfo", getBrowserConnectionInfo)
	registerMethod("testBrowserConnection", testBrowserConnection)
}
