// Canopy Url FFI — Percent-encoding primitives
//
// Imported in Url.can via:
//   foreign import javascript "external/url.js" as UrlFFI

/**
 * Percent-encode a string using encodeURIComponent.
 * Escapes all characters except A-Z a-z 0-9 - _ . ! ~ * ' ( ) so they can be
 * safely included in a URI path or query parameter.
 * @canopy-type String -> String
 * @name percentEncode
 * @param {string} string - The raw string to encode
 * @returns {string} The percent-encoded string
 */
function percentEncode(string)
{
	return encodeURIComponent(string);
}

/**
 * Decode a percent-encoded string using decodeURIComponent.
 * Returns Nothing if the string contains invalid percent-encoding sequences
 * (e.g. lone `%`, non-hex digits after `%`, or truncated multi-byte UTF-8).
 * @canopy-type String -> Maybe String
 * @name percentDecode
 * @param {string} string - The percent-encoded string to decode
 * @returns {Object} Just decoded on success, Nothing on invalid encoding
 */
function percentDecode(string)
{
	try
	{
		return _Maybe_Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return _Maybe_Nothing;
	}
}
