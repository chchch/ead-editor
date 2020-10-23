const ead_template =
`<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE ead PUBLIC "+//ISBN 1-931666-00-8//DTD ead.dtd (Encoded Archival Description (EAD) Version 2002)//EN" "ead.dtd">
<ead xmlns="https://ead3.archivists.org/schema/" id="N10001">
	<eadheader countryencoding="iso3166-1" dateencoding="iso8601" langencoding="iso639-2b"
		repositoryencoding="iso15511" scriptencoding="iso15924">
		<eadid></eadid>

		<filedesc>
			<titlestmt>
				<titleproper></titleproper>
				<subtitle>Notice descriptive</subtitle>
			</titlestmt>
			<publicationstmt>
				<publisher>Bibliothèque nationale de France.</publisher>
				<date calendar="gregorian" era="ce">2020</date>
			</publicationstmt>
		</filedesc>

		<profiledesc>
			<creation audience="internal">Cette notice a été encodée en XML conformément à la DTD EAD (version 2002).</creation>
			<langusage>Notice rédigée en <language langcode="eng">anglais</language></langusage>
		</profiledesc>

		<revisiondesc>
			<change>
				<date normal="2020">2020</date>
				<item>Notice revue encodée dans le cadre du projet <extref href="https://tst.hypotheses.org/88">Texts Surrounding Texts</extref> (TST, FRAL 2018, ANR/DFG).</item>
			</change>
		</revisiondesc>

	</eadheader>
	<archdesc level="item">

		<did>
			<unitid type="cote"></unitid>
			<unitid type="ancienne cote"></unitid>
			<unittitle><title></title>, by <persname></persname></unittitle>
			<langmaterial>Manuscript in <language langcode="tam">Tamil</language>.</langmaterial>
			<unitdate calendar="gregorian" era="ce" normal=""></unitdate>

			<physdesc>
				<geogname role="5020"></geogname>
				<physfacet type="support"></physfacet>
				<physfacet type="conditionnement"></physfacet>
				<extent></extent>
				<dimensions></dimensions>
				<physfacet type="écriture"></physfacet>
				<physfacet type="reliure"></physfacet>
                <physfacet type="codicologie"></physfacet>
                <physfacet type="marginalia"></physfacet>
                <physfacet type="autre"></physfacet>
			</physdesc>

			<repository>
				<corpname authfilenumber="751041006" source="RCR">Bibliothèque nationale de France. Département des Manuscrits.</corpname>
			</repository>

		</did>

		<scopecontent>

			<p id="shortdesc"></p>
            
            <p id="othertestimonies"></p>

			<p id="contents"></p>

			<p id="completeness"></p>
            
            <p id="paratexts"></p>

			<p id="excerpts"></p>

			<p id="abbreviations"></p>

			<p id="transliteration"></p>

		</scopecontent>

		<bibliography>
			<bibref>Cabaton, Antoine (1912). <emph render="italic">Catalogue sommaire des manuscrits indiens, indo-chinois &amp; malayo-polynésiens.</emph> Bibliothèque nationale. Département des manuscrits. Paris: E. Leroux. — See p. 1.
            <lb/><lb/>
Rosny, Léon de (1869). "La bibliothèque tamoule de M. Ariel, de Pondichéry." In: <emph render="italic">Variétés orientales</emph> (pp. 177‒224). Paris: Maisonneuve.
            </bibref>
		</bibliography>

		<acqinfo>
			<p>Bequest of <persname authfilenumber="ark:/12148/cb143513141"
					normal="Ariel, Edouard (1818-1854)" role="4010" source="OPP">Edouard
					Ariel</persname>. Made first to Société Asiatique de Paris in 1855, later
				transfered to Bibliothèque Nationale (see Rosny 1869).</p>
		</acqinfo>

		<processinfo>
			<p>This catalogue entry has been redacted by <persname></persname> (<address></address>) for the research program <extref href="https://tst.hypotheses.org/88">Texts Surrounding Texts</extref> (TST, FRAL 2018, ANR/DFG). Version 1, Sept 2020.</p>
		</processinfo>

	</archdesc>
</ead>`;
